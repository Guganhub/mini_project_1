var title= document.querySelectorAll('.card-title')
console.log(title)
var taskDiv=document.getElementById('productDiv')

//Add product
function addProduct(){
    console.log("Product Added")
    createDiv()
    title.value=""
}
//New div for the created product
function createDiv(){
    var productDiv=document.createElement('div')
    productDiv.classList.add("card","w-25","m-3")
    productDiv.innerHTML=`
    <div class="col product">
    <div class="card">
                <img src="./atta.jpg" class="card-img-top" alt="colaimage">
                <div class="card-body d-flex justify-content-between">
                    <h5 class="card-title">Atta ₹350</h5>
                    <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                    <button>Add Item</button>
                </div>
                <div class="button">
                    <button type="button" class="btn btn-primary">Edit Product</button>
                    <button type="button" class="btn btn-danger"onclick="deleteProduct()">Delete Product</button>
                </div>
            </div>
    </div>
    `
    taskDiv.append(productDiv)
}


// Delete product
function deleteProduct(id){
    var deleteReq="Are you sure to delete the product"
    if(confirm(deleteReq)==true){
        document.getElementById("productDiv").remove()
        
        }
}
