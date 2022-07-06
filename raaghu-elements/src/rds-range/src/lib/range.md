---
slug: "/range"
date: "2019-05-04"
title: "range"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Range Slider

<p class="checkbox-def">It is an input field that merchants can use to select a numeric value within a given range (min and max values).</p>

<section class="py-4">
    <h6>Single Range Slider</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewSingle-tab" data-bs-toggle="tab" data-bs-target="#PreviewSingle" type="button" role="tab" aria-controls="PreviewSingle" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularSingle-tab" data-bs-toggle="tab" data-bs-target="#AngularSingle" type="button" role="tab" aria-controls="AngularSingle" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewSingle" role="tabpanel" aria-labelledby="PreviewSingle-tab">
          <div class="contents bg-white p-5">
                                          <div class="row">
                                             <div class="col-md-4">
                                                <label for="customRange1" class="form-label">Example range</label>
                                                <input type="range" min="0" max="255" step="1" id="redVal">
                                             </div>
                                             <div class="col-md-4">
                                                <label for="customRange1" class="form-label">Example range</label>
                                                <input type="range" class="form-range" id="customRange1">
                                             </div>
                                          </div>
                                    </div>
        </div>
        <div class="tab-pane fade show" id="AngularSingle" role="tabpanel" aria-labelledby="AngularSingle-tab">
<div class="contents bg-code">
<div class="row  m-0 p-4">

```html
Code will go here
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>



 <section class="py-4">
    <h6>Disabled</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDisabled-tab" data-bs-toggle="tab" data-bs-target="#PreviewDisabled" type="button" role="tab" aria-controls="PreviewDisabled" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularDisabled-tab" data-bs-toggle="tab" data-bs-target="#AngularDisabled" type="button" role="tab" aria-controls="AngularDisabled" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDisabled" role="tabpanel" aria-labelledby="PreviewDisabled-tab">
          <div class="contents bg-white p-5">
                                          <div class="row">
                                             <div class="col-md-4 col-12">
                                                <label for="customRange1" class="form-label">Example range</label>
                                                <input type="range" class="form-range" id="customRange1" disabled="">
                                             </div>
                                          </div>
                                    </div>
        </div>
        <div class="tab-pane fade show" id="AngularDisabled" role="tabpanel" aria-labelledby="AngularDisabled-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
Code will go here
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4">
    <h6>Multirange Sliders</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewMultirange-tab" data-bs-toggle="tab" data-bs-target="#PreviewMultirange" type="button" role="tab" aria-controls="PreviewMultirange" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularMultirange-tab" data-bs-toggle="tab" data-bs-target="#AngularMultirange" type="button" role="tab" aria-controls="AngularMultirange" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewMultirange" role="tabpanel" aria-labelledby="PreviewMultirange-tab">
          <div class="contents bg-white p-5">
                                          <div class="row">
                                             <div class="col-md-4">
                                                <input type="range" class="form-range" name="my_range" value="" data-skin="round" data-type="double" data-min="0" data-max="1000" data-grid="true"> 
                                             </div>
                                             <div class="col-md-6">
                                                <span class="multi-range">
                                                    <input type="range" min="0" max="50" value="5" id="lower">
                                                    <input type="range" min="0" max="50" value="45" id="upper">
                                                </span>
                                             </div>
                                          </div>
                                    </div>
        </div>
        <div class="tab-pane fade show" id="AngularMultirange" role="tabpanel" aria-labelledby="AngularMultirange-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
Code will go here
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="py-4">
                        <h6>
                           Skeleton / Specifications
                        </h6>
                        <div class="py-3">
                              <!-- Tab panes -->
                              <div class="card border p-5">
                                 <div class="row">
                                    <div class="col-md-8">
                                       <img src="https://portal.raaghu.io/images/components/_range-slider/img-1.png" class="img-fluid">
                                    </div> 
                                 </div>
                              </div>
                        </div>
                     </section>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


 