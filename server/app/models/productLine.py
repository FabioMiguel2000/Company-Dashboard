from ..extensions import db

class ProductLine(db.Model):
    __tablename__ = 'productlines'
    productLine = db.Column(db.String(50), primary_key=True)
    textDescription = db.Column(db.String(4000))
    htmlDescription = db.Column(db.Text)
    image = db.Column(db.LargeBinary)

    def to_dict(self):
        return {
            "productLine": self.productLine,
            "textDescription": self.textDescription,
            "htmlDescription": self.htmlDescription,
            "image": self.image
        }