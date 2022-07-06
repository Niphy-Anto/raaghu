---
slug: "/Carousel"
date: "2019-05-04"
title: "Carousel"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

  
 

<link rel="stylesheet" href="../assets/css/main.css">

#  **Carousel**
  
<p class="">It is referred as the "slider" or "slides". Carousel works by rotating a group of images that can house text, static images or video content.</p>

</section>                      
<section class="py-4">
<h6>Basic</h6>
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
                                               
 <div class="col-lg-3 col-md-4 col-10 offset-1">
   Preview Section
   </div> 
   </div>
  </div>
  </div>
  <div class="tab-pane fade" id="code2" role="tabpanel" aria-labelledby="code-tab">
  <div class="contents bg-code ">
     <div class="m-0 " >

```html+
<rds-carousel
  [crossFade]="true"
  [darkVariant]="false"
  [indicators]="true"
  [controls]="true"
  [imageItem]="imageItem"
></rds-carousel>
```
</div>
  </div>
</div>

</div>
     </div>
     </div>   
     </section>                     
 
                     

<section class="py-4">
<h6>Skeleton / Specifications </h6>
  <div class="py-3">
                            
                              
<!-- Tab panes -->
                              
<div class="card border p-5">
                                 
 <div class="row">
 <div class="col-md-12">
 <img src="https://portal.raaghu.io/images/components/_carousel/img-1.png" class="img-fluid">
  </div> 
   </div>
    </div>

</div>
 </section>
  

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>