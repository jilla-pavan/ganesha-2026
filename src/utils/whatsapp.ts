export const WHATSAPP_NUMBER = '910000000000' // TODO: replace with real business number (country code + number, no + or spaces)
export const BUSINESS_DISPLAY_NUMBER = '+91 90000 00000'

/**
 * Builds a wa.me deep link with a pre-filled, encoded message.
 * Every "order", "enquire", or "bulk quote" action in the app should go through this
 * — there is no cart/checkout, WhatsApp IS the checkout.
 */
export function buildWhatsAppLink(message: string, number: string = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function productOrderMessage(name: string, price: number, qty = 1) {
  return `🙏 Jai Ganesh! I'd like to order:\n\n*${name}* x${qty}\n₹${(price * qty).toLocaleString('en-IN')}\n\nPlease confirm availability and delivery timeline.`
}

export function productEnquiryMessage(name: string) {
  return `🙏 Jai Ganesh! I'm interested in *${name}*. Could you share more details and delivery timelines?`
}

export function generalEnquiryMessage() {
  return `🙏 Jai Ganesh! I'd like to know more about your Ganesha idol collection.`
}

export function bulkOrderMessage() {
  return `🙏 Jai Ganesh! I'm enquiring on behalf of a mandal / housing society for a bulk order. Could you share pricing for multiple idols?`
}

export function wishlistMessage(names: string[]) {
  return `🙏 Jai Ganesh! I'd like to enquire about these idols from my wishlist:\n\n${names
    .map((n) => `• ${n}`)
    .join('\n')}`
}
