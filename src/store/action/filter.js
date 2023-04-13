export const viewType = "VIEWTYPE"
export const collType = "COLLTYPE"

export const ViewTypes = (item) => {
    return {
        type: viewType,
        payload: item
    }
}
export const CollType = (item) => {
    return {
        type: collType,
        payload: item
    }
}

