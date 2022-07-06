---
slug: "/list-group"
date: "2019-05-04"
title: "list-group"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">



#  **List Group**
  
<p class="">Lists are vertical groupings of related content. List items begin with either a number or a bullet.</p>

                       
                  
<section class="py-4">
<h6><b>Form Elements</b></h6>
<div class="py-3">
     <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab2" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#preview2" type="button" role="tab" aria-controls="preview2" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#code2" type="button" role="tab" aria-controls="code2" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="preview2" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

 <div class="row">
                                               
 
   <div class="row">
          <div class="col-md-5 text-start">
            <ul class="list-group">
              <li class="list-group-item">Label 1</li>
               <li class="list-group-item">Label 2</li>
                <li class="list-group-item">Label 3</li>
          </ul>
          </div> 
     
   </div> 
   </div>
  </div>
  </div>
  <div class="tab-pane fade" id="code2" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<rds-list-group
  [flush]="false"
  listType="list"
  [orderList]="false"
  [listItem]="listItem"
  (onClick)="onClick($event)"
  [list]="list"
>
  <ng-template #list let-item>
    <li [ngClass]="item.type">
      <input class="form-check-input me-1" type="checkbox" value="" />
      {{item.label}}
    </li>
  </ng-template>
</rds-list-group>
```
</div>
  </div>
</div>

</div>
     </div>
     </div>   
     </section>

   <section class="py-4">
<h6><b>List Group</b></h6>
<div class="py-3">
     <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab2" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#previewList" type="button" role="tab" aria-controls="previewList" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#codeList" type="button" role="tab" aria-controls="codeList" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewList" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

 <div class="row">
                                               
 
  Preview Section
   </div> 
   </div>
  </div>
  
  <div class="tab-pane fade" id="codeList" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<rds-list-group
  [flush]="false"
  listType="list"
  [orderList]="false"
  [listItem]="listItem"
  (onClick)="onClick($event)"
  [list]="list"
>
  <ng-template #list let-item>
    <li [ngClass]="item.type">
      <input class="form-check-input me-1" type="checkbox" value="" />
      {{item.label}}
    </li>
  </ng-template>
</rds-list-group>
```
</div>
  </div>
</div>

</div>
     </div>
     </div>   
     </section>
  <section class="py-4">
       <h6> Skeleton / Specifications </h6>
          <div class="py-3">
          <!-- Tab panes -->
            <div class="card border p-5">
          <div class="row">
           <div class="col-md-6">
             <img src="https://portal.raaghu.io/images/components/_list-group/img-1.png" class="img-fluid">
                                       <!-- <div class="spinner-border text-primary" role="status">
                                         <span class="visually-hidden">Loading...</span>
                                       </div> -->
           </div> 
             </div>
              </div>
              </div>
                     </section>
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>


 