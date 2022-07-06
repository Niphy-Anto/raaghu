---
slug: "/popover"
date: "2019-05-04"
title: "popover"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">
<link rel="stylesheet" href="../assets/css/main.css">


#  **Popover**
  
<p class="">Popovers are used to provide supplemental, useful, unique information about an element, including one or multiple actionable elements.</p>

<section class="py-4">
 <h6><b>Popover with Button  </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab1" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#previewButton" type="button" role="tab" aria-controls="previewButton" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#codeButton" type="button" role="tab" aria-controls="codeButton" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewButton" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

     Preview Section
     
  </div>
  </div>
  <div class="tab-pane fade" id="codeButton" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<rds-popover
  [popoverPosition]="popoverPosition"
  [popoverTitle]="popoverTitle"
  (click)="onClick($event)"
  [popoverContent]="popoverContent"
>
  <button class="btn btn-primary">popover button</button>
</rds-popover>
```
</div>
  </div>
</div>

</div>
     </div>
  </div>

</section>

<section class="py-4">
 <h6><b>Popover with Link  </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab1" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#previewLink" type="button" role="tab" aria-controls="previewLink" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#codeLink" type="button" role="tab" aria-controls="codeLink" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewLink" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

     Preview Section
     
  </div>
  </div>
  <div class="tab-pane fade" id="codeLink" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<rds-popover
  [popoverPosition]="popoverPosition"
  [popoverTitle]="popoverTitle"
  [popoverContent]="popoverContent"
  [hover]="hover"
>
  <a role="button" href="#">link button</a>
</rds-popover>
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
    <div class="card border p-5">
    <div class="row">
       <div class="col-md-12">
         <img src="https://portal.raaghu.io/images/components/_popover/img-1.png" class="img-fluid">
      </div> 
       </div>
       </div>
</div>
 </section>