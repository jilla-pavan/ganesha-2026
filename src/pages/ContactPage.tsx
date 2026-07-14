import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader'
import { Container } from '@/components/common/Primitives'
import { buildWhatsAppLink, generalEnquiryMessage, BUSINESS_DISPLAY_NUMBER } from '@/utils/whatsapp'

const contactSchema = z.object({
  name: z.string().min(2, 'Please share your name'),
  email: z.string().email('Enter a valid email address'),
  message: z.string().min(10, 'Tell us a little more (minimum 10 characters)'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) })

  const onSubmit = (data: ContactForm) => {
    console.log('Contact form submission data:', data)
    reset()
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-left">
      <PageHeader
        eyebrow="Get in Touch"
        title="We'd love to hear from you"
        description="Questions about custom orders, specific sizes, bulk mandal requirements, or packaging details—reach us directly."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="py-12">
        <Container className="max-w-6xl grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          
          {/* Left Column: Direct Contact Hub */}
          <div className="flex flex-col gap-4">
            
            {/* Primary High-Contrast WhatsApp Anchor Link */}
            <a
              href={buildWhatsAppLink(generalEnquiryMessage())}
              target="_blank"
              rel="noreferrer"
              className="group flex h-11 items-center justify-center gap-2 rounded-md bg-[#A33B23] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#8E321E] transition-all duration-200 active:scale-98"
            >
              <MessageCircle size={14} fill="currentColor" />
              Chat Directly via WhatsApp
            </a>

            {/* Information Rows */}
            {[
              [Phone, 'Call or Message', BUSINESS_DISPLAY_NUMBER],
              [Mail, 'Email Correspondence', 'hello@solapurganesha.in'],
              [MapPin, 'Family Workshop Studio', 'Solapur, Maharashtra, India'],
            ].map(([Icon, label, value]) => {
              const IconComp = Icon as typeof Phone
              return (
                <div 
                  key={label as string} 
                  className="flex items-start gap-4 rounded-md border border-neutral-200 bg-white p-5 shadow-sm"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-[#A33B23]/10 text-[#A33B23]">
                    <IconComp size={16} strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2D1B14]">{label as string}</p>
                    <p className="text-[13px] text-neutral-600 font-medium mt-1">{value as string}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Native Minimal Form Component */}
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-5 rounded-md border border-neutral-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <div>
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#2D1B14]">
                Your Name
              </label>
              <input
                id="name"
                {...register('name')}
                className="mt-2 h-11 w-full rounded-md border border-neutral-300 bg-white px-4 text-[13px] font-medium text-neutral-800 outline-none transition-colors focus:border-[#A33B23]"
              />
              {errors.name && <p className="mt-1 text-xs font-semibold text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#2D1B14]">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="mt-2 h-11 w-full rounded-md border border-neutral-300 bg-white px-4 text-[13px] font-medium text-neutral-800 outline-none transition-colors focus:border-[#A33B23]"
              />
              {errors.email && <p className="mt-1 text-xs font-semibold text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#2D1B14]">
                Message Details
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message')}
                className="mt-2 w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-[13px] font-medium text-neutral-800 outline-none transition-colors focus:border-[#A33B23] resize-none"
              />
              {errors.message && <p className="mt-1 text-xs font-semibold text-red-600">{errors.message.message}</p>}
            </div>

            <button 
              type="submit" 
              className="self-start inline-flex h-11 items-center justify-center rounded-md bg-[#2D1B14] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Send Message
            </button>

            {isSubmitSuccessful && (
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mt-2">
                ✓ Message received successfully. We will write back within the hour.
              </p>
            )}
          </form>

        </Container>
      </section>
    </div>
  )
}