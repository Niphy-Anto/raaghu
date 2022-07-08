---
slug: "/pagination"
date: "2019-05-04"
title: "pagination"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

  
 

<link rel="stylesheet" href="../assets/css/main.css">

#  **Pagination**
  
<p class="">Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.</p>

<section class="py-4">
 <h6><b>Advanced </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="preview-tab" data-bs-toggle="tab" data-bs-target="#previewAdvanced" type="button" role="tab" aria-controls="previewAdvanced" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="code-tab" data-bs-toggle="tab" data-bs-target="#codeAdvanced" type="button" role="tab" aria-controls="codeAdvanced" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewAdvanced" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">
   <div class="row">
            <div class="col-12">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                  <li class="page-item">
                  <a class="page-link text-muted" href="#" aria-label="Previous">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path> </svg>
                     <span class="">Prev  </span>
                </a>
                  </li>
                     <li class="page-item active"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                         <span class="">Next</span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
</svg>
                                                         </a>
                                                       </li>
                                                     </ul>
                                                   </nav>
                                             </div>
                                          </div>

  </div>
   
     
     
  
  </div>
  <div class="tab-pane fade" id="codeAdvanced" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
<rds-pagination
  [totalRecords]="10"
  [recordsPerPage]="3"
  size="medium"
  alignmentType="start"
  role="Advanced"
  [reset]="false"
  (onPageChange)="onPageChange($event)"
></rds-pagination>
```
</div>
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
<rds-pagination
  [totalRecords]="10"
  [recordsPerPage]="1"
  size="medium"
  alignmentType="start"
  role="Basic"
  [reset]="false"
  (onPageChange)="onPageChange($event)"
></rds-pagination>
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
    <img src="https://portal.raaghu.io/images/components/_pagination/img-1.png" class="img-fluid">
     </div> 
  <div class="col-md-6">
    <img src="https://portal.raaghu.io/images/components/_pagination/img-2.png" class="img-fluid">
     </div> 
     </div>
      </div>
    </div>
   </section>