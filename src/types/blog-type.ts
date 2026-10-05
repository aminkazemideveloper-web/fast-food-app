export type BlogPrize = {
  id: string;
  magham: string;
  title: string;
};

export type BlogPrice = {
  heading: string;
  javayez: BlogPrize[];
};

export type BlogWinner = {
  id: string;
  jayz: string;
  name: string;
  img: string;
};

export type BlogType = {
  id: string;
  image: string;
  title: string;
  sub: string;
  desc: string;
  price: BlogPrice;
  winners: BlogWinner[];
};
