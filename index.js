function getData() {
  fetch("https://dummyjson.com/products")
    .then((data) => data.json())
    .then((result) => {
      $("#loading").hide();
      console.log(result);
      result?.products?.map((item) => {
        $("#products").append(`<p>Name: ${item?.title}</p>`);
        $("#products").append(`<p>Price: ${item?.price} USD</p>`);
      });
    });
}

getData();
