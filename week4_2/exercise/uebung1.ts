interface Products {
  [productId: number]: Product;
}

interface Images {
  [imageId: number]: Image;
}

const images: Images = {
  1: {
    imageUrl: "https://testImages.com/book",
    imageData: "This is a Book",
    altText: "Sorry could not load this book",
  },
  2: {
    imageUrl: "https://testImages.com/cd",
    imageData: "This is a CD",
    altText: "Sorry could not load this cd",
  },
  4: {
    imageUrl: "https://testImages.com/calculator",
    imageData: "This is a Calculator",
    altText: "Sorry could not laod this Calculator",
  },
};

const products: Products = {
  10: {
    name: "book",
    producId: 10,
    imageId: 1,
  },
  11: {
    name: "cd",
    producId: 11,
    imageId: 2,
  },
  12: {
    name: "laptop",
    producId: 12,
  },
  13: {
    name: "calculator",
    producId: 13,
    imageId: 4,
  },
};
