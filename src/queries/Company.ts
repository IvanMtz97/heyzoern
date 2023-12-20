import groq from "groq";

export function getListingCompaniesQuery(page: number = 0, limit: number = 10) {
  return `*[_type == "company"] [${page * limit}...${(page + 1) * limit}] {
    ...,
    _id,
    "url": lower(url.current),
    "rating": round(math::avg(reviews[@.active].rating), 2),
    "reviewCount": count(reviews[@.active].rating),
    name,
    "address":{
        "state":addresses[0].state->name,
        "city":addresses[0].city->name
    },
    website,
    "logo":logo.asset->{
        ..., metadata
    },
    "thumbnail":thumbnail.asset->{
        ..., metadata
    },
    "conditions": conditions[]->names[],
    "treatments": treatments[]->names[],
    "bodyParts": bodyParts[]->name
  }`;
}

export function getListingCompany(id: string) {
  return `*[_type == "company"] [_id == "${id}"] {
    ...,
    _id,
    "url": lower(url.current),
    "rating": round(math::avg(reviews[@.active].rating), 2),
    "reviewCount": count(reviews[@.active].rating),
    name,
    "address":{
      "state":addresses[0].state->name,
      "city":addresses[0].city->name,
      "street":addresses[0].street,
      "zip":addresses[0].zip
    },
    website,
    "logo":logo.asset->{
      ..., metadata
    },
    "thumbnail":thumbnail.asset->{
      ..., metadata
    },
    "conditions": conditions[]->names[],
    "treatments": treatments[]->names[],
    "leadPractitioner": {
        "id": leadPractitioner->_id,
        "url": lower(leadPractitioner->url.current),
        "photo": leadPractitioner->photo.asset->{
            ..., metadata
        },
        "title": leadPractitioner->name.title->abbreviation,
        "firstname": leadPractitioner->name.firstname,
        "lastname": leadPractitioner->name.lastname,
        "position": leadPractitionerCompanyPosition
    },
    "paymentOptions": paymentOptions[]->{
        name,
        "icon": icon.name
    },
    "bodyParts": bodyParts[]->name
  }`;
}