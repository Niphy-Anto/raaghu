---
slug: "/radio-button"
date: "2019-05-04"
title: "radio-button"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">
<link rel="stylesheet" href="../assets/css/main.css">


#  **Radio Button**
  
<p>Radio buttons are group of mutually exclusive choices and only one selection from the group is allowed.</p>

<section class="py-4">
 <h6><b>Basic </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab1" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#previewBasic" type="button" role="tab" aria-controls="previewBasic" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#codeBasic" type="button" role="tab" aria-controls="codeBasic" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewBasic" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

 <div class="col-md-6 col-6 text-start">
       <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked="">
         <label class="form-check-label" for="flexRadioDefault2">
                                                 Radio Button 
                                               </label>
                                             </div>
                                          </div>
     
  </div>
  </div>
  <div class="tab-pane fade" id="codeBasic" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<rds-radio-button
  [switch]="false"
  [inline]="false"
  [isInputGroup]="false"
  [itemList]="itemList"
  (onClick)="onClick($event)"
></rds-radio-button>
```
</div>
  </div>

</div>
</div>
     </div>
  </div>

</section>  
 <section class="py-4">
    <h6>Skeleton / Specifications</h6>
      <div class="py-3">
 <!-- Tab panes -->
  <div class="">
    <div class="row">
      <div class="col-md-6">
            <img src="https://portal.raaghu.io/images/components/_radio/img-1.png" class="img-fluid">
     </div>
         <div class="col-md-6 ">
          <img src="https://portal.raaghu.io/images/components/_radio/img-2.png" class="img-fluid">
   </div>
 </div>
 </div>
</section>