// pages/api/apply.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, gender, birthdate, job, phone, social_id } = req.body || {};

    // 基本欄位檢查（必要欄位都要有）
    if (!name || !gender || !birthdate || !job || !phone || !social_id) {
      return res.status(400).json({ error: '缺少必要欄位' });
    }

    // 你提供的 GAS Web App URL（可改成環境變數 process.env.GAS_URL）
    const GAS_URL =
      'https://script.google.com/macros/s/AKfycbyFfrng7V467dKsRVn_kPQj-W3I8faORvGJdyJqPF-M3_e_xhRs1vinYXeShH3B1tgR/exec';

    // 用 x-www-form-urlencoded，GAS 最穩定
    const params = new URLSearchParams({
      name: String(name).trim(),
      gender: String(gender).trim(),
      birthdate: String(birthdate).trim(),
      job: String(job).trim(),
      phone: String(phone).trim(),
      social_id: String(social_id).trim(),
    });

    // 設一個逾時，避免卡住
    const ctrl = new AbortController();
    const to = setTimeout(() => ctrl.abort(), 15000);

    const gasRes = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: params.toString(),
      signal: ctrl.signal,
    }).catch((err) => {
      throw new Error(`無法連線到 GAS：${err.message}`);
    });

    clearTimeout(to);

    const text = await gasRes.text();
    if (!gasRes.ok) {
      return res.status(502).json({ error: 'GAS 回應非 2xx', detail: text });
    }

    // 嘗試解析 JSON；若不是 JSON 就封裝成 raw 回傳
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = { raw: text };
    }

    return res.status(200).json({ ok: true, gas: parsed });
  } catch (err) {
    const msg = err?.name === 'AbortError' ? '連線逾時（超過 15 秒）' : err.message;
    return res.status(500).json({ error: msg || 'Server error' });
  }
}