export interface ServiceData {
  icon: string
  iconAlt: string
  title: string
  desc: string
}

export const servicesData: ServiceData[] = [
  {
    icon: "/icons/dog-leash.svg",
    iconAlt: "white dog on leash icon",
    title: "Dog Walking",
    desc: "Whether your pup needs a quick potty break or a long adventure, our walks are tailored to match their pace, personality, and needs.",
  },
  {
    icon: "/icons/pet-sitting.svg",
    iconAlt: "pet sitting icon",
    title: "Pet Sitting",
    desc: "Going out of town? We’ll keep your pets happy and comfortable right at home with personalized, reliable care while you're away.",
  },
  {
    icon: "/icons/critter.svg",
    iconAlt: "lizard icon",
    title: "Cat and Critter Care",
    desc: "From shy kitties to curious bunnies, we provide gentle, thoughtful care for all your feline and small animal companions.",
  },
  {
    icon: "/icons/puppy.png",
    iconAlt: "puppy icon",
    title: "Puppy Visits",
    desc: "Perfect for new pups who need extra attention! We provide playtime, potty breaks, and lots of love during the day.",
  },
  {
    icon: "/icons/overnight.png",
    iconAlt: "overnight stay icon",
    title: "Overnight Stays",
    desc: "Give your pet a sleepover buddy! We’ll stay the night to ensure they feel safe, secure, and well-cared for until morning.",
  },
  {
    icon: "/icons/pet-transport.svg",
    iconAlt: "white pet taxi icon",
    title: "Pet Transportation",
    desc: "Need help getting your pet to the groomer or vet? We offer safe and stress-free transport for your furry (or feathery) friend.",
  },
]
