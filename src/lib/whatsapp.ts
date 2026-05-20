// WhatsApp helpers — opens wa.me with a prefilled message for the lab.
export const LAB_WA_NUMBER = "919751504558";

export function waUrl(message: string) {
  return `https://wa.me/${LAB_WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function waForPackage(name: string, price: number | string) {
  return waUrl(
    `Hello Live Life Healthcare Lab,\n\nI would like to book the *${name}* (₹${price}).\n\nPlease confirm availability and home collection slot.\n\nName:\nAddress:\nPreferred date/time:`
  );
}

export function waForTest(name: string, price: number | string) {
  return waUrl(
    `Hello Live Life Healthcare Lab,\n\nI would like to book the test *${name}* (₹${price}).\n\nName:\nAddress:\nPreferred date/time:`
  );
}

export function waGeneric() {
  return waUrl(
    `Hello Live Life Healthcare Lab, I would like to enquire about your tests / packages.`
  );
}
