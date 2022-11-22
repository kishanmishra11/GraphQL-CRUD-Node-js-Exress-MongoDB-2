
//<------------ Add Category mutation query ------------>//

/*
mutation{
    addCategory(categoryName:"mobile",categoryDescription:"this is mobile category") {
        id
        categoryName
        categoryDescription
    }
}
*/

//<------------ update category mutation query ------------>//

/*
mutation{
  updateCategory(id:"637c769d51a75582dbca8918",categoryName:"mobile", categoryDescription:"this is mobile category"){
    id
    categoryName
    categoryDescription
  }
}
*/

//<------------ List all category query ------------>//

/*
query{
    categories{
      id
	  categoryName
      categoryDescription
    }
}
*/
//<------------ view single category query ------------>//

/*
query{
      category(id:"637c769d51a75582dbca8918"){
      id
	  categoryName
      categoryDescription
    }
}
*/

//<------------ delete category mutation query ------------>//

/*
mutation{
    deleteCategory(categoryId:"637c79a1d1d7830838eb6e74")
}
*/

//<------------  Add subCategory mutation query ------------>//

/*
mutation{
  addSubCategory(subCategoryName:"vivo",
    subCategoryDescription:"this is vivo mobile brand"){
    subCategoryName
    subCategoryDescription
  }
}
*/
//<------------ update subCategory mutation query ------------>//

/*
mutation{
  updateSubCategory(id:"637c7b4f3572e21903b08ffc",subCategoryName:"apple iphone", subCategoryDescription:"this is apple mobile brand"){
    id
    subCategoryName
    subCategoryDescription
  }
}
*/

//<------------ List all subCategory query ------------>//

/*
query{
    subCategories{
      id
	  subCategoryName
    subCategoryDescription
      category{
        id
        categoryName
        categoryDescription
      }
    }
}
*/
//<------------ view single subCategory query ------------>//

/*
query{
    subCategory(id:"637c7b4f3572e21903b08ffc"){
      id
	  subCategoryName
    subCategoryDescription
      category{
        id
        categoryName
        categoryDescription
      }
    }
}
*/

//<------------ delete subCategory mutation query ------------>//

/*
mutation{
    deleteSubCategory(subCategoryId:"637c7c7246b19ae9a0b72f91")
}
*/


//<------------ Add product mutation query ------------>//

/*
mutation{
    addProduct(productName:"realme 9 pro",productDescription:"this is realme 9 pro mobile." productPrice:"26000",categoryId:"637c769d51a75582dbca8918",subCategoryId:"637c9adec1b2e0933f331784") {
        id
        productName
        productDescription
    }
}
*/

//<------------ update product mutation query ------------>//

/*
mutation{
  updateProduct(id:"637c8c9f02dd90a78253636c",productName:"iphone 12 mini", productDescription:"this is apple iphone 12 mini mobile", productPrice:"48500"){
    id
    productName
    productDescription
    productPrice
  }
}
*/

//<------------ List all product query ------------>//

/*
query{
    products{
      id
	  productName
    productPrice
    productDescription
      category{
        id
        categoryName
      },
    subCategory{
      id
      subCategoryName
    }
    }
}
*/
//<------------ view single product query ------------>//

/*
query{
    product(id:"637c8c8302dd90a78253636a"){
      id
	  productName
    productPrice
    productDescription
      category{
        id
        categoryName
      },
    subCategory{
      id
      subCategoryName
    }
    }
}
*/

//<------------ delete product mutation query ------------>//

/*
mutation{
    deleteProduct(productId:"637c8c9f02dd90a78253636c")
}
*/