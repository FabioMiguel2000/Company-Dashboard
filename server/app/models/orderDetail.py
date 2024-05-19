from ..extensions import db

class OrderDetail(db.Model):
    __tablename__ = 'orderdetails'
    orderNumber = db.Column(db.Integer, db.ForeignKey('orders.orderNumber'), primary_key=True)
    productCode = db.Column(db.String(15), db.ForeignKey('products.productCode'), primary_key=True)
    quantityOrdered = db.Column(db.Integer, nullable=False)
    priceEach = db.Column(db.Numeric(10, 2), nullable=False)
    orderLineNumber = db.Column(db.SmallInteger, nullable=False)

    def to_dict(self):
        return {
            "orderNumber": self.orderNumber,
            "productCode": self.productCode,
            "quantityOrdered": self.quantityOrdered,
            "priceEach": self.priceEach,
            "orderLineNumber": self.orderLineNumber
        }
