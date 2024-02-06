import React from "react";

const Carousal = () => {
  const customStyle = {
    height: "50vh",
  };

  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://images.template.net/54576/Sports-Twitter-Banner-sm-1610104578642-545760.jpeg"
            class="d-block w-100"
            alt="..."
            style={customStyle}
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.template.net/54576/Sports-Twitter-Banner-sm-1610104578642-545760.jpeg"
            class="d-block w-100"
            alt="..."
            style={customStyle}
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.template.net/54576/Sports-Twitter-Banner-sm-1610104578642-545760.jpeg"
            class="d-block w-100"
            alt="..."
            style={customStyle}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousal;
