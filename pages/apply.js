// pages/apply.js
import Head from 'next/head';
import { useState } from 'react';

export default function Apply() {
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus('送出中...');

    const form = e.target;
    const payload = {
      name: form.name.value.trim(),
      gender: form.gender.value,
      birthdate: form.birthdate.value,
      job: form.job.value.trim(),
      phone: form.phone.value.trim(),
      social_id: form.social_id.value.trim(),
    };

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data?.error || '伺服端回應非 2xx');

      setStatus('✅ 已送出，我們將盡快與您聯繫！');
      form.reset();
    } catch (err) {
      setStatus(`❌ 送出失敗：${err.message || '請稍後再試'}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head><title>應徵表單 - SL AI Studio</title></Head>
      <div className="max-w-2xl mx-auto px-6 py-12 text-gray-800 bg-white rounded shadow">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#5b3a1d]">應徵表單</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block text-sm font-medium mb-1">姓名</span>
            <input name="name" required className="w-full border px-3 py-2 rounded" />
          </label>

          <label className="block mb-4">
            <span className="block text-sm font-medium mb-1">性別</span>
            <select name="gender" required className="w-full border px-3 py-2 rounded">
              <option value="">請選擇</option>
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </label>

          <label className="block mb-4">
            <span className="block text-sm font-medium mb-1">出生年月日</span>
            <input type="date" name="birthdate" required className="w-full border px-3 py-2 rounded" />
          </label>

          <label className="block mb-4">
            <span className="block text-sm font-medium mb-1">現職</span>
            <input name="job" required className="w-full border px-3 py-2 rounded" />
          </label>

          <label className="block mb-4">
            <span className="block text-sm font-medium mb-1">電話</span>
            <input name="phone" required className="w-full border px-3 py-2 rounded" />
          </label>

          <label className="block mb-4">
            <span className="block text-sm font-medium mb-1">社群 ID（Line 或 WeChat）</span>
            <input name="social_id" required className="w-full border px-3 py-2 rounded" />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="bg-[#7e441f] text-white px-6 py-2 rounded hover:bg-[#5b3a1d] transition disabled:opacity-60"
          >
            {submitting ? '送出中...' : '送出應徵'}
          </button>

          <p className="mt-4 text-sm text-gray-600">{status}</p>
        </form>
      </div>
    </>
  );
}