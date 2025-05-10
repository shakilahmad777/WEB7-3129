const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }else{
        return [];
    }
}

const addToStoredWishList = (id) => {
    const wishList = getStoredWishList();
    if(wishList.includes()) {
        console.log(id, 'already exists in the wish list');
    }else{
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wish-lish', wishListStr)
    }
}

export {addToStoredWishList}