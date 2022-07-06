---
slug: "Button"
date: "2019-05-04"
title: "button"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

<link rel="stylesheet" href="../assets/css/main.css">

#  **Buttons**
  
<p class="">A button triggers an event or action. They let users know what will happen next.</p>

<br/>



  
<section class="py-4">

 ###### Default State  
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewDefault-tab" data-bs-toggle="tab" data-bs-target="#PreviewDefault" type="button" role="tab" aria-controls="PreviewDefault" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularDefault-tab" data-bs-toggle="tab" data-bs-target="#AngularDefault" type="button" role="tab" aria-controls="AngularDefault" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewDefault" role="tabpanel" aria-labelledby="PreviewDefault-tab">
         <div class="contents bg-light p-5">
            <button type="button" class="btn btn-primary mx-3">Primary</button>
<button type="button" class="btn btn-secondary mx-3">Secondary</button>
<button type="button" class="btn btn-success mx-3">Success</button>
<button type="button" class="btn btn-danger mx-3">Danger</button>
<button type="button" class="btn btn-warning mx-3">Warning</button>
<button type="button" class="btn btn-info mx-3">Info</button>
<button type="button" class="btn btn-default mx-3">Default</button>                             
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularDefault" role="tabpanel" aria-labelledby="AngularDefault-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<button type="button" class="btn btn-primary mx-4">Primary</button>
<button type="button" class="btn btn-secondary mx-4">Secondary</button>
<button type="button" class="btn btn-success mx-4">Success</button>
<button type="button" class="btn btn-danger mx-4">Danger</button>
<button type="button" class="btn btn-warning mx-4">Warning</button>
<button type="button" class="btn btn-info mx-4">Info</button>
<button type="button" class="btn btn-default mx-4">Default</button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>
  

  <section class="py-4">

 ###### Icon Button  
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewIcon-tab" data-bs-toggle="tab" data-bs-target="#PreviewIcon" type="button" role="tab" aria-controls="PreviewIcon" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularIcon-tab" data-bs-toggle="tab" data-bs-target="#AngularIcon" type="button" role="tab" aria-controls="AngularIcon" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewIcon" role="tabpanel" aria-labelledby="PreviewIcon-tab">
         <div class="contents bg-light p-5">
          <button type="button" class="btn btn-danger mx-5 mt-3 p-3" style="border-radius:100px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button>
<button type="button" class="btn btn-success mx-4 mt-3 p-3" style="border-radius:100px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg></button>                             
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularIcon" role="tabpanel" aria-labelledby="AngularIcon-tab">
          <div class="contents bg-code">
<div class="row m-0">

```html
<button type="button" class="btn btn-danger btn-circle btn-lg mx-4">
   <i class="bi bi-pencil-fill"></i>
</button>  

<button type="button" class="btn btn-success btn-circle btn-lg mx-4">
   <i class="bi bi-trash3"></i>
</button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>






<section class="py-4">

###### Outline Button  
   <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewOutline-tab" data-bs-toggle="tab" data-bs-target="#PreviewOutline" type="button" role="tab" aria-controls="PreviewOutline" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularOutline-tab" data-bs-toggle="tab" data-bs-target="#AngularOutline" type="button" role="tab" aria-controls="AngularOutline" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewOutline" role="tabpanel" aria-labelledby="PreviewOutline-tab">
         <div class="contents bg-light p-5">
            
<button type="button" class="btn btn-outline-primary mx-4">Primary</button>
<button type="button" class="btn btn-outline-secondary mx-4">Secondary</button>
<button type="button" class="btn btn-outline-success mx-4">Success</button>
<button type="button" class="btn btn-outline-danger mx-4">Danger</button>
<button type="button" class="btn btn-outline-warning mx-4">Warning</button>
<button type="button" class="btn btn-outline-info mx-4">Info</button>
<button type="button" class="btn btn-outline-default mx-4">Default</button>                             
   </div>
   </div>
        <div class="tab-pane fade show" id="AngularOutline" role="tabpanel" aria-labelledby="AngularOutline-tab">
          <div class="contents bg-code">
<div class="row">

```html
<button type="button" class="btn btn-outline-primary mx-4">Primary</button>
<button type="button" class="btn btn-outline-secondary mx-4">Secondary</button>
<button type="button" class="btn btn-outline-success mx-4">Success</button>
<button type="button" class="btn btn-outline-danger mx-4">Danger</button>
<button type="button" class="btn btn-outline-warning mx-4">Warning</button>
<button type="button" class="btn btn-outline-info mx-4">Info</button>
<button type="button" class="btn btn-outline-default mx-4">Default</button>
```

</div>
          </div>
        </div>
      </div>
    
  </section>



###### Skeleton/Specifications
<div class="mt-4">
<div class="row">
<div class="col-md-6">
<img src="https://portal.raaghu.io/images/components/_buttons/primary-btn-details.png" class="img-fluid">
</div>
<div class="col-md-6">
<img src="https://portal.raaghu.io/images/components/_buttons/text-only-button.png" class="img-fluid">
</div>
</div>
<div class="row mt-4">
<div class="col-md-6">
<img src="https://portal.raaghu.io/images/components/_buttons/outlined-button.png" class="img-fluid">
</div>
<div class="col-md-6">
<img src="https://portal.raaghu.io/images/components/_buttons/icon-button.png" class="img-fluid">
</div>
</div> 	



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
