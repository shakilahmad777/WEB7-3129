const getStoredReadList = () => {
  const storedReadListStr = localStorage.getItem("read-list");
  if (storedReadListStr) {
    const storedReadList = JSON.parse(storedReadListStr);
    return storedReadList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedReadList = getStoredReadList();
  if (storedReadList.includes(id)) {
    console.log(id, "already exists in the read list");
  } else {
    storedReadList.push(id);
    const storedReadListStr = JSON.stringify(storedReadList);
    localStorage.setItem("read-list", storedReadListStr);
  }
};

export { addToStoredReadList };
