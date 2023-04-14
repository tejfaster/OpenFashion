import { Dimensions } from 'react-native'
import { Icons } from "./images"

export const { width, height } = Dimensions.get('screen')

export const newArrival_Data = [
    { id: 1, title: "All" },
    { id: 2, title: "Cardigan" },
    { id: 3, title: "Top" },
    { id: 4, title: "One Piece" },
    { id: 5, title: "Bag" }
]

export const brand = [
    { id: 1, title: "prada", image: Icons.prada },
    { id: 2, title: "Burberry", image: Icons.burberry_logo },
    { id: 3, title: "Boss", image: Icons.boss_logo },
    { id: 4, title: "Cartier", image: Icons.catier_logo },
    { id: 5, title: "Gucci", image: Icons.gucci },
    { id: 6, title: "Tiffny & co", image: Icons.tiffany_and_co },
]

export const CollectionType = [
    { id: 1, title: "New" },
    { id: 2, title: "Old" },
]

export const ViewType = [
    { id: 1, title: "List", image: Icons.listview },
    { id: 2, title: "Grid", image: Icons.grid_View },
    { id: 3, title: "Full_View", image: Icons.gallery },
]

export const Apparel = [
    { id: 2, type: "Cardigan", description: "13WN reversible angora cardigan", image: Icons.cardigan, price: "180" },
    { id: 3, type: "Cardigan", description: "11WDN Green burberry cardigan", image: Icons.green_cardigan, price: "145" },
    { id: 4, type: "Cardigan", description: "21WN silver reversible boss cardigan", image: Icons.silver_cardigan, price: "164" },
    { id: 5, type: "Cardigan", description: "21WN silver reversible boss cardigan", image: Icons.staple_G_cardigan, price: "126", collection: [{ id: 5.1, image: Icons.staple_G_cardigan, price: "127" }, { id: 5.2, image: Icons.staple_G_cardigan_1, price: "140" }, { id: 5.3, image: Icons.staple_G_cardigan_2, price: "155" }] },
    { id: 1, type: "Cardigan", description: "21WN reversible gucci cardigan", image: Icons.burberry_cardigan, price: "120" },
    { id: 6, type: "Bag", image: Icons.burberry_bag, collection: [{ id: 1.1, image: Icons.burberry_bag }, { id: 1.2, image: Icons.burberry_sling_bag_2 }] },
    { id: 7, type: "Bag", image: Icons.oblong_bag },
    { id: 8, type: "Cardigan", image: Icons.intarsia_G_cardigan },
    { id: 9, type: "Top", image: Icons.burberry_top, collection: [{ id: 9.1, image: Icons.burberry_top_1 }] },
    { id: 10, type: "Top", image: Icons.check_print_burberry, collection: [{ id: 10.1, image: Icons.check_print_burberry }, { id: 10.2, image: Icons.check_print_burberry_1 }, { id: 10.3, image: Icons.check_print_burberry_2 }] },
    { id: 11, type: "One_Piece", image: Icons.burberry_one_piece, collection: [{ id: 11.1, image: Icons.burberry_one_piece }, { id: 11.2, image: Icons.burberry_one_piece_1 }] },
]

export const justForYou = [
    { id: 1, description: "11WDN Green burberry cardigan", image: Icons.green_cardigan, price: "179" },
    { id: 2, description: "Staple Gucci Cardigan 457EQ", image: Icons.oblong_bag, price: "149" },
    { id: 3, description: "BurBerry harris tweed three button", image: Icons.harris_tweed_three_button, price: "199" },
    { id: 4, description: "Cartier goggle cashmere blend", image: Icons.cashmere_blend, price: "189" },
]

export const trending = [
    { id: 1, title: "#2023" },
    { id: 2, title: "#spring" },
    { id: 3, title: "#summer" },
    { id: 4, title: "#fall" },
    { id: 5, title: "#openfashion" },
    { id: 6, title: "#elite" },
]

export const collection = [
    {
        id: 1,
        type: "Jacket",
        title: "Jacket",
        description: "13WN reversible angora cardigan",
        image: Icons.cloths_1,
        price: "699",
        rating: "4.8",
        size: [{ id: 1, item: "S" }, { id: 2, item: "M" }, { id: 3, item: "L" }],
        color: [{ id: 1, item: "black" }, { id: 2, item: "darkorange" }, { id: 3, item: "blue" }],
        material: "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.",
        care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
        careitem: [{ id: 1, title: "Do not use bleach", image: Icons.do_Not_Bleach }, { id: 2, title: "Do not tumble dry", image: Icons.do_Not_Tumble_Dry }, { id: 3, title: "Dry clean with tetrachlorethylene", image: Icons.do_Not_Wash }, { id: 4, title: "Iron at a maximum of 110ºC/230ºF", image: Icons.iron_Low_Temperature }]
    },
    {
        id: 2, type: "Cardigan", title: "Sweater", description: "lame reversible angora cardigan", image: Icons.cloths_2, price: "549", rating: "3.8", size: [{ id: 1, item: "S" }, { id: 2, item: "M" }],
        color: [{ id: 1, item: "black" }, { id: 2, item: "darkorange" }, { id: 3, item: "red" }],
        material: "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.",
        care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
        careitem: [{ id: 1, title: "Do not use bleach", image: Icons.do_Not_Bleach }, { id: 2, title: "Do not tumble dry", image: Icons.do_Not_Tumble_Dry }, { id: 3, title: "Dry clean with tetrachlorethylene", image: Icons.do_Not_Wash }, { id: 4, title: "Iron at a maximum of 110ºC/230ºF", image: Icons.iron_Low_Temperature }]
    },
    {
        id: 3, type: "Jacket", title: "Jacket", description: "angora cardigan", image: Icons.cloths_3, price: "589", rating: "4.5", size: [{ id: 1, item: "S" }, { id: 3, item: "L" }],
        color: [{ id: 1, item: "black" }, { id: 2, item: "darkorange" }, { id: 3, item: "pink" }],
        material: "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.",
        care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
        careitem: [{ id: 1, title: "Do not use bleach", image: Icons.do_Not_Bleach }, { id: 2, title: "Do not tumble dry", image: Icons.do_Not_Tumble_Dry }, { id: 3, title: "Dry clean with tetrachlorethylene", image: Icons.do_Not_Wash }, { id: 4, title: "Iron at a maximum of 110ºC/230ºF", image: Icons.iron_Low_Temperature }]
    },
    {
        id: 4, type: "Swaeter", title: "Sweater", description: "High neck burbuerry sweater", image: Icons.cloths_4, price: "139", rating: "4.6", size: [{ id: 2, item: "M" }, { id: 3, item: "L" }],
        color: [{ id: 1, item: "black" }, { id: 2, item: "darkorange" }, { id: 3, item: "skyblue" }],
        material: "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.",
        care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
        careitem: [{ id: 1, title: "Do not use bleach", image: Icons.do_Not_Bleach }, { id: 2, title: "Do not tumble dry", image: Icons.do_Not_Tumble_Dry }, { id: 3, title: "Dry clean with tetrachlorethylene", image: Icons.do_Not_Wash }, { id: 4, title: "Iron at a maximum of 110ºC/230ºF", image: Icons.iron_Low_Temperature }]
    },
    {
        id: 5, type: "Jacket", title: "Jacket", description: "A|X fur jacket ", image: Icons.cloths_5, price: "999", rating: "4.5", size: [{ id: 1, item: "S" }, { id: 2, item: "M" }, { id: 3, item: "L" }],
        color: [{ id: 1, item: "black" }, { id: 2, item: "darkorange" }, { id: 3, item: "blue" }],
        material: "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.",
        care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
        careitem: [{ id: 1, title: "Do not use bleach", image: Icons.do_Not_Bleach }, { id: 2, title: "Do not tumble dry", image: Icons.do_Not_Tumble_Dry }, { id: 3, title: "Dry clean with tetrachlorethylene", image: Icons.do_Not_Wash }, { id: 4, title: "Iron at a maximum of 110ºC/230ºF", image: Icons.iron_Low_Temperature }]
    },
    {
        id: 6, type: "One Piece", title: "One Piece", description: "Blue Dynamic Burberry One Piece", image: Icons.burberry_one_piece, price: "799", rating: "4.0", size: [{ id: 1, item: "S" }, { id: 2, item: "M" }, { id: 3, item: "L" }],
        color: [{ id: 1, item: "black" }, { id: 2, item: "darkorange" }, { id: 3, item: "blue" }],
        material: "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.",
        care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
        careitem: [{ id: 1, title: "Do not use bleach", image: Icons.do_Not_Bleach }, { id: 2, title: "Do not tumble dry", image: Icons.do_Not_Tumble_Dry }, { id: 3, title: "Dry clean with tetrachlorethylene", image: Icons.do_Not_Wash }, { id: 4, title: "Iron at a maximum of 110ºC/230ºF", image: Icons.iron_Low_Temperature }]
    },
]

export const pagination = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
]

export const banner = [
    { id: 1, image: Icons.banner_1 },
    { id: 2, image: Icons.cardigan },
    { id: 3, image: Icons.cashmere_blend },
    { id: 4, image: Icons.silver_cardigan },
]