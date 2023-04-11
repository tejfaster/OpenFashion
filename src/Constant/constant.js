import { Dimensions } from 'react-native'
import { Icons } from "./images"

export const { width, height } = Dimensions.get('screen')

export const newArrival_Data = [
    { id: 1, title: "All" },
    { id: 2, title: "Cardigan" },
    { id: 3, title: "Top" },
    { id: 4, title: "One Picec" },
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
    { id: 1, description: "11WDN Green burberry cardigan", image: Icons.green_cardigan },
    { id: 2, description: "Staple Gucci Cardigan 457EQ", image: Icons.staple_G_cardigan_2 },
    { id: 3, description: "BurBerry harris tweed three button", image: Icons.harris_tweed_three_button},
    { id: 4, description: "Cartier goggle cashmere blend", image: Icons.cashmere_blend},
]