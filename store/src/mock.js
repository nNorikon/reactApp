import defaultIceCream from "./assets/images/defaultIcecream.svg";
import firstTypeOfIcecream from "./assets/images/firstTypeOfIcecream.svg";
import secondTypeOfIcecream from "./assets/images/secondTypeOfIcecream.svg";
import thirdTypeOfIcecream from "./assets/images/thirdTypeOfIcecream.svg";

const desc = 'Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.\n' +
    '\n' +
    'Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.'

export const allGoods = [
    {
        id: 0,
        img: defaultIceCream,
        name: 'Первое мороженное',
        cost: '$245',
        art: 'BXD100BLK',
        desc
    },
    {
        id: 1,
        img: firstTypeOfIcecream,
        name: 'Второе мороженное',
        cost: '$164',
        art: 'BXD100RTD',
        desc
    },
    {
        id: 2,
        img: secondTypeOfIcecream,
        name: 'Третье мороженное',
        cost: '$120',
        art: 'BXH101LDK',
        desc
    },
    {
        id: 3,
        img: thirdTypeOfIcecream,
        name: 'Четвертое мороженное',
        cost: '$101',
        art: 'BXD100BLK',
        desc
    },

]


export const socialLinks = [
    {
        id: 0,
        innerText: 'Our products',
        link: '#'
    },
    {
        id: 1,
        innerText: 'Privacy terms',
        link: '#'
    },
    {
        id: 2,
        innerText: 'Twitter',
        link: '#'
    },
    {
        id: 3,
        innerText: 'Facebook',
        link: '#'
    },
    {
        id: 4,
        innerText: 'Email',
        link: '#'
    }
];