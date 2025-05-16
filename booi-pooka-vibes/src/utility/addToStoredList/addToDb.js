import { toast } from "react-toastify";

// get read list btn setItem by localstorege
const getStoredReadList = () => {
  const storedReadListStr = localStorage.getItem("read-list");
  if (storedReadListStr) {
    const storedReadList = JSON.parse(storedReadListStr);
    return storedReadList;
  } else {
    return [];
  }
};

// get wish list btn setItem by localstorege
const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");
  if(storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  }else {
    return [];
  }
}

const addToStoredReadList = (id) => {
  const storedReadList = getStoredReadList();
  if (storedReadList.includes(id)) {
    console.log(id, "already exists in the read list");
  } else {
    storedReadList.push(id);
    const storedReadListStr = JSON.stringify(storedReadList);
    localStorage.setItem("read-list", storedReadListStr);
    // console.log(typeof(storedReadListStr))

    // ideally trigger toast form the component
    toast('this book is added to your read list')
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if(storedWishList.includes(id)) {
    console.log(id, 'this already exists in the wish list');
  }else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    // console.log(typeof(storedWishListStr))

    // ideally trigger toast form the component
    toast('this book added to the your wish list')
  }
}



export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList };
