
module.exports = BoundingBoxView;

function BoundingBoxView(boundingBox) {

  this.x1 = this.minX = boundingBox.x1;
  this.y1 = this.minY = boundingBox.y1;
  this.x2 = this.maxX = boundingBox.x2;
  this.y2 = this.maxY = boundingBox.y2;
  this.width = boundingBox.width();
  this.height = boundingBox.height();

}

BoundingBoxView.prototype = {

  round: function(precision) {
    precision = precision || 0;

    this.x1 = this.minX = +this.x1.toFixed(precision);
    this.y1 = this.minY = +this.y1.toFixed(precision);
    this.x2 = this.maxX = +this.x2.toFixed(precision);
    this.y2 = this.maxY = +this.y2.toFixed(precision);
    this.width = +this.width.toFixed(precision);
    this.height = +this.height.toFixed(precision);

    return this;
  },

  toString: function() {
    return [
      this.minX,
      this.minY,
      this.width,
      this.height
    ]
      .join(' ');
  }

};