const Product = require('../models/index');

exports.postAddProduct = (req, res, next) => {
//  console.log('image');
    const category = req.body.category;
    const image = req.file.path;
      //  const imageUrl=image.path;
  //  console.log(category);
    Product.create({
      category: category,
        image: image,
      })
      .then(result => {
        // console.log(result);
        console.log('Created Product');
        res.redirect('/add');
      })
      .catch(err => {
        console.log(err);
      });
  };

  exports.getProducts = (req, res, next) => {
    Product
      .findAll({where:{category:req.params.category}})
      .then(products => {
        res.render('category', {
          prods: products,
        });
      })
      .catch(err => console.log(err));
  };
  exports.getSingleProduct=(req,res,next)=>{
    Product
      .findByPk(req.params.prodId)
      .then(detail => {
      // console.log(products);
        res.render('details', {
          detail: detail,
        });
      })
      .catch(err => console.log(err));
  }
  