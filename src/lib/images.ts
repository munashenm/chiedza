export const DR_CHIEDZA_IMAGES = {
  uniform: "/images/dr-chiedza/circ-uniform.png",
  lectureHall: "/images/dr-chiedza/lecture-hall.png",
  headshot: "/images/dr-chiedza/headshot.png",
  graduation: "/images/dr-chiedza/graduation.png",
} as const;

export const PAGE_BANNERS = {
  default: DR_CHIEDZA_IMAGES.headshot,
  southAfrica: DR_CHIEDZA_IMAGES.uniform,
  ukDependent: DR_CHIEDZA_IMAGES.headshot,
  skilledMigration: DR_CHIEDZA_IMAGES.graduation,
  appeals: DR_CHIEDZA_IMAGES.lectureHall,
  aboutCirc: DR_CHIEDZA_IMAGES.uniform,
  aboutDr: DR_CHIEDZA_IMAGES.lectureHall,
  testimonials: DR_CHIEDZA_IMAGES.headshot,
  contact: DR_CHIEDZA_IMAGES.uniform,
  bookConsultation: DR_CHIEDZA_IMAGES.headshot,
  documentUpload: DR_CHIEDZA_IMAGES.graduation,
  blog: DR_CHIEDZA_IMAGES.graduation,
} as const;
