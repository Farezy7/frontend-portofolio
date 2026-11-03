import { useContactForm } from "../hooks/useContactForm";

function ContactList() {
  const {
    comments,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    status,
    loading,
    handleSubmit,
  } = useContactForm();

  return (
    <section id="contact" className="px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-3xl font-bold text-black">
          Hubungi Saya
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Tinggalkan pesan, saran, atau ajakan kolaborasi.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
          <input
            className="rounded-lg text-red-950 border px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama"
            required
          />
          <input
            className="rounded-lg text-red-950 border px-4 py-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email (tidak ditampilkan ke publik)"
            required
          />
          <textarea
            className="rounded-lg text-red-950 border px-4   py-2"
            rows={4}
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesan..."
            required
          />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{message.length}/500</span>
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-black px-5 py-2 text-white disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim"}
            </button>
          </div>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>

        <div className="mt-10 flex flex-col gap-4">
          <h3 className="text-lg text-black font-semibold">
            {comments.length} Pesan
          </h3>
          {comments.length === 0 && (
            <p className="text-black">Belum ada pesan. Jadi yang pertama!</p>
          )}
          {comments.map((c) => (
            <div
              key={c.id}
              className="flex gap-3 rounded-lg border p-4 text-black"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white bg-black font-bold">
                {c.sender_name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-medium text-black">
                  {c.sender_name}
                  <span className="ml-2 text-sm font-normal text-black">
                    {new Date(c.created_at).toLocaleDateString("id-ID")}
                  </span>
                </p>
                <p className="mt-1 text-gray-700">{c.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactList;
