import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div className='p-2 flex flex-col items-center gap-5'>
      <div className="w-full max-w-md mx-auto overflow-hidden">
        <table className="w-full text-left text-base">
          <tbody className="divide-y">
            <tr>
              <td className="px-1 font-medium text-black">Khushwant Pilaniwala</td>
              <td className="px-6 py-4 text-right font-mono">
                <a
                  href="https://wa.me/916297476257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-green-600 text-sm transition-colors"
                  title="Chat on WhatsApp"
                >
                  +91 62974 76257
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-1 font-medium text-black">Nilangshu Bhattacharyya</td>
              <td className="px-6 py-4 text-right font-mono">
                <a
                  href="https://wa.me/917980481642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-green-600 text-sm transition-colors"
                  title="Chat on WhatsApp"
                >
                  +91 79804 81642
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-1 font-medium text-black">Pratham Das</td>
              <td className="px-6 py-4 text-right font-mono">
                <a
                  href="https://wa.me/919382156445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-green-600 text-sm transition-colors"
                  title="Chat on WhatsApp"
                >
                  +91 93821 56445
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-1 font-medium text-black">Harsh Verma</td>
              <td className="px-6 py-4 text-right font-mono">
                <a
                  href="https://wa.me/919749252757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-green-600 text-sm transition-colors"
                  title="Chat on WhatsApp"
                >
                  +91 97492 52757
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex gap-2'>
        <p>Send us an Email - </p>
        <a href="mailto:doubleslash.ieeejusb@gmail.com" className="text-blue-700 underline">
          doubleslash.ieeejusb@gmail.com
        </a>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-xl underline underline-offset-4'>Check out our social media</p>
        <div className='flex items-center gap-3'>
          <Link href={"https://www.instagram.com/_ieeeju/"} target='_blank'><Instagram size={24} className='hover:scale-110' /></Link>
          <Link href={"https://www.linkedin.com/company/ieee-ju/"} target='_blank'><Linkedin size={24} className='hover:scale-110' /></Link>
          <Link href={"https://x.com/_ieeeju"} target='_blank' className='hover:scale-110'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg></Link>
        </div>
      </div>
    </div>
  )
}

export default Contact