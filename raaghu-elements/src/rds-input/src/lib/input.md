---
slug: "/Input"
date: "2019-05-04"
title: "Input"
---
  
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" rel="../../../../../../../raaghu/src/assets/css/main.css">
<link rel="stylesheet" rel="../../../../../../raaghu/src/assets/css/style-elements.css">


# Input

It is list of collapsible panels with clickable heading or down arrow, expands to show rolled up content.



<section class="py-4">
 <h6><b>Auto Tooltip </b> </h6>
  
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
     <div class="bg-dark text-white py-4 px-4" >

```html
<rds-input
  size="default"
  [disabled]="false"
  Title=""
  TitleType="text"
  [readonly]="false"
  value=""
  inputType="text"
  placeholder="Add placeholder"
  inputName="Field_name"
  icon=""
  tooltipTitle="Auto"
  tooltipPlacement="auto"
></rds-input>
```
</div>
  </div>


</div>
     </div>
  </div>

</section>

<section class="py-4">
 <h6><b>Basic </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#previewBasic" type="button" role="tab" aria-controls="previewBasic" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#codeBasic" type="button" role="tab" aria-controls="code" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>

<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewBasic" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

     Preview Section
     
  </div>
  </div>
  <div class="tab-pane fade" id="codeBasic" role="tabpanel" aria-labelledby="code-tab">
  <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<rds-input
  size="default"
  [disabled]="false"
  Title=""
  TitleType="text"
  [readonly]="false"
  value=""
  inputType="text"
  placeholder="Add placeholder"
  inputName="Field_name"
  icon=""
  tooltipTitle=""
  tooltipPlacement="top"
></rds-input>
```
</div>
  </div>
</div>

</div>
     </div>
  </div>

</section>

<section class="py-4">
 <h6><b>Bottom Tooltip </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#previewBottom" type="button" role="tab" aria-controls="previewBottom" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#codeBottom" type="button" role="tab" aria-controls="codeBottom" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewBottom" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

     Preview Section
     
  </div>
  </div>
  <div class="tab-pane fade" id="codeBottom" role="tabpanel" aria-labelledby="code-tab">
     <div class="bg-dark text-white py-4 px-4" >

```html
<rds-input
  size="default"
  [disabled]="false"
  Title=""
  TitleType="text"
  [readonly]="false"
  value=""
  inputType="text"
  placeholder="Add placeholder"
  inputName="Field_name"
  icon=""
  tooltipTitle="Bottom"
  tooltipPlacement="bottom"
></rds-input>
```
</div>
  </div>


</div>
     </div>
  </div>

</section>

<section class="py-4">
 <h6><b>Left Tooltip </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#previewLeft" type="button" role="tab" aria-controls="previewLeft" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#codeLeft" type="button" role="tab" aria-controls="codeLeft" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewLeft" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

     Preview Section
     
  </div>
  </div>
  <div class="tab-pane fade" id="codeLeft" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<rds-input
  size="default"
  [disabled]="false"
  Title=""
  TitleType="text"
  [readonly]="false"
  value=""
  inputType="text"
  placeholder="Add placeholder"
  inputName="Field_name"
  icon=""
  tooltipTitle="Left"
  tooltipPlacement="left"
></rds-input>
```
</div>
  </div>
</div>

</div>
     </div>
  </div>

</section>
<section class="py-4">
 <h6><b>Right Tooltip </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#previewRight" type="button" role="tab" aria-controls="previewRight" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#codeRight" type="button" role="tab" aria-controls="codeRight" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewRight" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

     Preview Section
     
  </div>
  </div>
  <div class="tab-pane fade" id="codeRight" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<rds-input
  size="default"
  [disabled]="false"
  Title=""
  TitleType="text"
  [readonly]="false"
  value=""
  inputType="text"
  placeholder="Add placeholder"
  inputName="Field_name"
  icon=""
  tooltipTitle="Right"
  tooltipPlacement="right"
></rds-input>
```
</div>
  </div>
</div>

</div>
     </div>
  </div>

</section>
<section class="py-4">
 <h6><b>Top Tooltip </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#previewTop" type="button" role="tab" aria-controls="previewTop" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#codeTop" type="button" role="tab" aria-controls="codeTop" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewTop" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

     Preview Section
     
  </div>
  </div>
  <div class="tab-pane fade" id="codeTop" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<rds-input
  size="default"
  [disabled]="false"
  Title=""
  TitleType="text"
  [readonly]="false"
  value=""
  inputType="text"
  placeholder="Add placeholder"
  inputName="Field_name"
  icon=""
  tooltipTitle="Top"
  tooltipPlacement="top"
></rds-input>
```
</div>
  </div>
</div>

</div>
     </div>
  </div>

</section>
<section class="py-4">
  <h6><b> Specifications</b></h6>
   <div class="py-3">
    <!-- Tab panes -->
   <div class="card border p-5">
    <div class="row">
       <div class="col-md-5">
          <img src="https://portal.raaghu.io/images/components/_input/img-3.png" class="img-fluid">
          </div> 
       </div>
      </div>
 </div>
    </section>
  <section class="py-4">
   <h6><b>Skeleton</b> </h6>
   <div class="py-3">
   <!-- Tab panes -->
    <div class="card border p-5">
     <div class="row">
     <div class="col-md-8">
       <img src="https://portal.raaghu.io/images/components/_input/img-4.png" class="img-fluid">
     </div> 
     </div>
    </div>
</div>
</section>