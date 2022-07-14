---
slug: "breadcrumb"
date: "1519-05-04"
title: "breadcrumb"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">
<link rel="stylesheet" href="../assets/css/main.css">

#### Breadcrumbs

Breadcrumbs are a list of links representing the current page and its “ancestors”.

<div class="cust-tabs">
<ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#breadcrumbs" type="button" role="tab" aria-controls="preview" aria-selected="true">Preview</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#code" type="button" role="tab" aria-controls="preview" aria-selected="true">Code</button>
  </li>
</ul>

</div>

<div class="tab-content border mb-5" id="nav-tabContent">
  <div class="tab-pane fade show active" id="breadcrumbs" role="tabpanel" aria-labelledby="preview-tab">
<div class="contents bg-light p-5">
<div class="row">
                                             <div class="col-12">
                                                   <nav aria-label="breadcrumb">
                                                     <ol class="breadcrumb">
                                                       <li class="breadcrumb-item active" aria-current="page">Home</li>
                                                     </ol>
                                                   </nav>

<nav aria-label="breadcrumb">
                                                     <ol class="breadcrumb">
                                                       <li class="breadcrumb-item"><a href="#">Home</a></li>
                                                       <li class="breadcrumb-item active" aria-current="page">Library</li>
                                                     </ol>
                                                   </nav>

 <nav aria-label="breadcrumb">
<ol class="breadcrumb">
                                                          <li class="breadcrumb-item"><a href="#">Home</a></li>
                                                          <li class="breadcrumb-item"><a href="#">Library</a></li>
                                                          <li class="breadcrumb-item active" aria-current="page">Data</li>
                                                        </ol>
                                                   </nav>
                                             </div>
                                          </div>

  </div>
 </div>
  <div class="tab-pane fade" id="code" role="tabpanel" aria-labelledby="code-tab">
<div class="contents bg-code">
<div class="row m-0">

```html
<rds-breadcrumb
  customBreadcrumbsItems="[{ name: 'Home', route: '/home', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px' , disabled: true}, { name: 'About', route: '/About', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px' , disabled: true}, { name: 'Contact US', route: '/Contact', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px' , disabled: true}, { name: 'Services', route: '/Services', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px', disabled: true }, { name: 'Contact US', route: '/Contact', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px', disabled: true }]"
  role="basic"
  [iconShow]="false"
  [submit]="false"
  [block]="false"
  [disabled]="false"
  [outlineButton]="false"
  [roundedButton]="false"
  [toggleButton]="false"
  (onNavigation)="onNavigation($event)"
  (onItemClick)="onItemClick($event)"
></rds-breadcrumb>
```
</div>
</div>
</div>
</div>

<div style="margin-bottom: 40px"></div>

###### Styled Breadcrumbs

<nav>
  <div class="nav nav-tabs mt-4" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Preview</button>

  </div>
</nav>

<div class="tab-content border bg-light" id="nav-tabContent">

  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  
   <div class="contents bg-light p-5">

 <div class="row">
<div class="col-12">
<img src="https://portal.raaghu.io/images/components/_breadcrumbs/2.png" class="img-fluid">
</div>
 </div>
 </div>

  </div>

</div>

<div class="py-4">

###### Skeleton/Specifications

<div class="py-3">

<div class="card border p-5">

<div class="row">
 <div class="col-md-6">
 <img src="https://portal.raaghu.io/images/components/_breadcrumbs/img-1.png" class="img-fluid">
 </div>
<div class="col-md-6">
 <img src="https://portal.raaghu.io/images/components/_breadcrumbs/img-2.png" class="img-fluid">
</div>
</div>
</div>
</div>
</div>
