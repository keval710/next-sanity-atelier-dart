export interface Images {
    altText: string,
    _key: string,
    _type: string,
    asset: {
        _ref: string,
        _type: string
    }
}
export interface BacImages {
    title: string,
    images: Images[],
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string
}

export interface Menus {
    menuName: string,
    menuUrl: string,
    _key: string
}
export interface Menu {
    menu: Menus[],
    title: string,
}

interface skillCards {
    position: string,
    text:string,
    size: number
    textSize: number,
    _key: string,
    digitalContent: {
        _type: string,
        asset: {
            _ref: string,
            _type: string
        }
    },
    textColor: {
        hex: string
    }
}

export interface SkillCard {
    title: string,
    skillCard: skillCards[],
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string
}

export type FormData = {
    email: string;
    password: string;
    name?: string
}

export interface AuthResType {
    message: string;
    role: string;
    status: number;
    error: {
        message: string;
    }
}