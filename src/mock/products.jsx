export const products = [
    {
        id:1,
        category:"grandes",
        title:"Grisines",
        price: 50,
        stock: 1000,
        img:"https://res.cloudinary.com/doslir5b7/image/upload/v1667161797/grisines_ooccod.jpg"

    },

    {
        id:2,
        category:"medianos",
        title:"Donas",
        price: 124,
        stock: 400,
        img:"https://res.cloudinary.com/doslir5b7/image/upload/v1667162044/donas_ivishq.jpg"

    },

    {
        id:3,
        category:"pequeños",
        title:"Rolss",
        price: 172,
        stock: 800,
        img:"https://res.cloudinary.com/doslir5b7/image/upload/v1667162035/rolss_wwwir9.jpg"

    }
];

export const getProducts = (categoryName) => {
    return new Promise((res, rej) => {
        const prodFiltrados = products.filter(
            (prod) => prod.category === categoryName
        );
        const ref = categoryName ? prodFiltrados : products;
        setTimeout(() => {
            res(ref);
        }, 500);
    });
};
