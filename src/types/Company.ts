export type SanityAddress = {
  state: {
    _ref: string,
  };
};

export type PaymentOption = {
  name: string;
  icon: string;
}

export type SanityListingCompany = {
  _id: string;
  name: string;
  thumbnail: {
    url: string;
  },
  logo: {
    url: string;
  }
  conditions: string[];
  address: {
    state: string;
    city: string;
    street: string;
    zip: string;
  };
  treatments: string[];
  leadPractitioner: {
    firstname: string;
    id: string;
    lastname: string;
    photo: {
      url: string;
    },
    position: string;
    title: string;
  }
  paymentOptions: PaymentOption[];
};