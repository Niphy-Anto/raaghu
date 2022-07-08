---
slug: "/offcanvas"
date: "2019-05-04"
title: "offcanvas"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

  
 

<link rel="stylesheet" href="../assets/css/main.css">

#  **Offcanvas**
  
<p class="">Offcanvas is a sidebar that can be toggled via JavaScript to appear from the left, right, or bottom edge of the viewport.</p>

<section class="py-4">
 <h6><b>Basic </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab1" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#preview1" type="button" role="tab" aria-controls="preview1" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#code1" type="button" role="tab" aria-controls="code" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="preview1" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

     Preview Section
     
  </div>
  </div>
  <div class="tab-pane fade" id="code1" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<button
  class="btn btn-primary"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#canvasExample"
  aria-controls="canvasExample"
  (click)="onShow.emit($event)"
>
  Button
</button>
<rds-offcanvas></rds-offcanvas>
```
</div>
  </div>
</div>

</div>
     </div>
  </div>

</section>
