export default function Contact() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100"> 
        <div className="bg-white shadow-lg rounded-xl p-8 w-96">
            <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
            <form>
                <input name="name" placeholder="Your Name" className="w-full border p-2 mb-3 rounded" />
                <input name="email" placeholder="Your Email" type="email" className="w-full border p-2 mb-3 rounded" />
                <textarea name="message" placeholder="Your Message" className="w-full border p-2 mb-3 rounded h-24"></textarea>
                <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">Send Message</button>
            </form>
        </div>
    </div>
  );
}