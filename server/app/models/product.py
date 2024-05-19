from ..extensions import db

class Product(db.Model):
    __tablename__ = 'products'
    productCode = db.Column(db.String(15), primary_key=True)
    productName = db.Column(db.String(70), nullable=False)
    productLine = db.Column(db.String(50), db.ForeignKey('productlines.productLine'), nullable=False)
    productScale = db.Column(db.String(10), nullable=False)
    productVendor = db.Column(db.String(50), nullable=False)
    productDescription = db.Column(db.Text, nullable=False)
    quantityInStock = db.Column(db.SmallInteger, nullable=False)
    buyPrice = db.Column(db.Numeric(10, 2), nullable=False)
    MSRP = db.Column(db.Numeric(10, 2), nullable=False)

    def to_dict(self):
        return {
            "productCode": self.productCode,
            "productName": self.productName,
            "productLine": self.productLine,
            "productScale": self.productScale,
            "productVendor": self.productVendor,
            "productDescription": self.productDescription,
            "quantityInStock": self.quantityInStock,
            "buyPrice": self.buyPrice,
            "MSRP": self.MSRP
        }
