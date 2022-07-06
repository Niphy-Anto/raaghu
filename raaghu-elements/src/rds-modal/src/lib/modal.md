---
slug: "/modal"
date: "2019-05-04"
title: "modal"
---
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../assets/css/style-elements.css">

  
 

<link rel="stylesheet" href="../assets/css/main.css">

#  **Modal Popups**
  
<p class="">It is a dialog box/popup window that is displayed on top of the current page</p>

<section class="py-4">
 <h6><b>Form Modal </b> </h6>
  
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

   <div class="row">
        <div class="col-md-4 mb-2">
                <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch Demo Modal  </button>

   <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
             <div class="modal-content">
               <div class="modal-header">
                   <h6 class="modal-title" id="exampleModalLabel">Modal title</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
                <div class="modal-body">Modal body</div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-secondary btn-sm px-4" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary btn-sm px-4">Save </button>
                    </div>
                </div>
            </div>
         </div>
     </div>              
     </div>
     </div>
  </div>
  
  <div class="tab-pane fade" id="code1" role="tabpanel" aria-labelledby="code-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
   <button
  type="button"
  (click)="onClick($event)"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#storybookModal"
>
  {{label}}
</button>
<rds-modal
  modalId="storybookModal"
  (onShow)="onShow($event)"
  [modalheader]="modalheader"
  [Modalbody]="Modalbody"
  [Modalfooter]="Modalfooter"
>
  <div modalheader class="col-md-12">
    <button
      style="float:right"
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      (click)="onClose($event)"
    ></button>
    <h5 class="modal-title" id="storybookModal">{{modalData.modalHeader}}</h5>
  </div>
  <div Modalbody>
    <p>{{modalData.modalContent}}</p>
  </div>
  <div Modalfooter>
    <button
      type="button"
      (click)="onClose($event)"
      class="btn btn-secondary m-1"
      data-bs-dismiss="modal"
    >
      Close
    </button>
    <button type="button" (click)="showAlert()" class="btn btn-primary">
      Save changes
    </button>
  </div>
</rds-modal>
```
</div>
  </div>
</div>

</div>
     </div>
  </div>

</section>

<section class="py-4">
 <h6><b>Long Content Modal </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab1" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="previewLongContent-tab" data-bs-toggle="tab" data-bs-target="#previewLongContent" type="button" role="tab" aria-controls="previewLongContent" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="codeLongContent-tab" data-bs-toggle="tab" data-bs-target="#codeLongContent" type="button" role="tab" aria-controls="codeLongContent" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewLongContent" role="tabpanel" aria-labelledby="preview-tab">
  
  <div class="contents bg-light p-5">

   <div class="row">
        <div class="col-md-4 mb-2">
                <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch Long Content  Modal  </button>

   <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
             <div class="modal-content">
               <div class="modal-header">
                   <h6 class="modal-title" id="exampleModalLabel">Modal title</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
                <div class="modal-body">Modal body</div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-secondary btn-sm px-4" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary btn-sm px-4">Save </button>
                    </div>
                </div>
            </div>
         </div>
     </div>              
     </div>
     </div>
  </div>
  
  <div class="tab-pane fade" id="codeLongContent" role="tabpanel" aria-labelledby="codeLongContent-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
   <button
  type="button"
  (click)="onClick($event)"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#storybookModal"
>
  {{label}}
</button>
<rds-modal
  modalId="storybookModal"
  [modalheader]="modalheader"
  [Modalbody]="Modalbody"
  [Modalfooter]="Modalfooter"
>
  <div modalheader class="col-md-12">
    <button
      style="float:right"
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      (click)="onClose($event)"
    ></button>
    <h5 class="modal-title" id="storybookModal">{{modalData.modalHeader}}</h5>
  </div>
  <div Modalbody>
    <p>
      {{modalData.modalContent}}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </p>
  </div>
  <div Modalfooter>
    <button
      type="button"
      (click)="onClose($event)"
      class="btn btn-secondary m-1"
      data-bs-dismiss="modal"
    >
      Close
    </button>
    <button type="button" (click)="showAlert()" class="btn btn-primary">
      Save changes
    </button>
  </div>
</rds-modal>
```
</div>
  </div>
</div>

</div>
     </div>
  </div>

</section>
<section class="py-4">
 <h6><b>Static Backdrop Modal </b> </h6>
  
  <div class="py-3">
    <div class="cust-tabs">
  <ul class="nav nav-tabs" id="myTab1" role="tablist">

  <li class="nav-item" role="presentation">
  <button class="nav-link active" id="previewStaticModal-tab" data-bs-toggle="tab" data-bs-target="#previewStaticModal" type="button" role="tab" aria-controls="previewStaticModal" aria-selected="true">Preview</button>
  </li>

  <li class="nav-item" role="presentation">
  <button class="nav-link" id="codeStaticModal-tab" data-bs-toggle="tab" data-bs-target="#codeStaticModal" type="button" role="tab" aria-controls="codeStaticModal" aria-selected="false"><img src="../../../../../../../raaghu/src/images/Angular_Icon.png"> &nbsp;
  <i class="bi bi-code-slash" style="font-size:1.0rem"></i></button>
  </li>
</ul>


<div class="tab-content card border" id="myTabContent1">

  <div class="tab-pane fade show active" id="previewStaticModal" role="tabpanel" aria-labelledby="previewStaticModal-tab">
  
  <div class="contents bg-light p-5">

   <div class="row">
        <div class="col-md-4 mb-2">
                <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Static Backdrop  Modal  </button>

   <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
             <div class="modal-content">
               <div class="modal-header">
                   <h6 class="modal-title" id="exampleModalLabel">Modal title</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
                <div class="modal-body">Modal body</div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-secondary btn-sm px-4" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary btn-sm px-4">Save </button>
                    </div>
                </div>
            </div>
         </div>
     </div>              
     </div>
     </div>
  </div>
  
  <div class="tab-pane fade" id="codeStaticModal" role="tabpanel" aria-labelledby="codeStaticModal-tab">
   <div class="contents bg-code">
     <div class=" py-4 px-4" >

```html
   <button
  type="button"
  (click)="onClick($event)"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#storybookModal"
>
  {{label}}
</button>
<rds-modal
  modalId="storybookModal"
  [modalheader]="modalheader"
  [Modalbody]="Modalbody"
  [Modalfooter]="Modalfooter"
>
  <div modalheader class="col-md-12">
    <button
      style="float:right"
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      (click)="onClose($event)"
    ></button>
    <h5 class="modal-title" id="storybookModal">{{modalData.modalHeader}}</h5>
  </div>
  <div Modalbody>
    <p>
      {{modalData.modalContent}}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </p>
  </div>
  <div Modalfooter>
    <button
      type="button"
      (click)="onClose($event)"
      class="btn btn-secondary m-1"
      data-bs-dismiss="modal"
    >
      Close
    </button>
    <button type="button" (click)="showAlert()" class="btn btn-primary">
      Save changes
    </button>
  </div>
</rds-modal>
```
</div>
  </div>
</div>

</div>
     </div>
  </div>

</section>