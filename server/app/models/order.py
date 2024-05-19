from ..extensions import db

class Order(db.Model):
    __tablename__ = 'orders'
    orderNumber = db.Column(db.Integer, primary_key=True)
    orderDate = db.Column(db.Date, nullable=False)
    requiredDate = db.Column(db.Date, nullable=False)
    shippedDate = db.Column(db.Date)
    status = db.Column(db.String(15), nullable=False)
    comments = db.Column(db.Text)
    customerNumber = db.Column(db.Integer, db.ForeignKey('customers.customerNumber'), nullable=False)

    def to_dict(self):
        return {
            "orderNumber": self.orderNumber,
            "orderDate": self.orderDate,
            "requiredDate": self.requiredDate,
            "shippedDate": self.shippedDate,
            "status": self.status,
            "comments": self.comments,
            "customerNumber": self.customerNumber
        }
