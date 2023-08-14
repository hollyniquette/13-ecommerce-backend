// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category //
Product.belongsTo(Category, { foreignKey: "category_id" });

// Categories have many Products //
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag) //
// mini project syntax vs below comment?
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });

// Tags belongToMany Products (through ProductTag) //
// this syntax vs index.js in mini project??
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id" });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
