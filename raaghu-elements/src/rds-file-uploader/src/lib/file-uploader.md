---
slug: "/file-uploader"
date: "2019-05-04"
title: "file-uploader"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### File Uploaders

<p class="checkbox-def">File uploaders allow users to select one or more files to upload to a specific location.</p>

<section class="py-4">
    <h6>Basic</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewBasic-tab" data-bs-toggle="tab" data-bs-target="#PreviewBasic" type="button" role="tab" aria-controls="PreviewBasic" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularBasic-tab" data-bs-toggle="tab" data-bs-target="#AngularBasic" type="button" role="tab" aria-controls="AngularBasic" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewBasic" role="tabpanel" aria-labelledby="PreviewBasic-tab">
          <div class="contents bg-light p-5">
            <div class="row">
               <div class="contents bg-light p-5">
                                       <div class="row">
                                           <div class="col-xl-6 col-md-9">
                                                <form class="abc">
                                                   <div class="row">
                                                      <div class="col-6">
                                                         <label>
                                                            Upload Files
                                                         </label>
                                                      </div>                                                      
                                                      <div class="col-6 text-end">
                                                         <label class="text-muted">
                                                            Maximum 5MB
                                                         </label>
                                                      </div>
                                                   </div>
                                                  <input type="file" id="file-upload" multiple="" required="">
                                                  <label class="file-upload" for="file-upload">
                                                      Drag and drop files 
                                                      <div>(PNG, JPG, DOC, PDF, PPT)</div>
                                                  </label>
                                                  <div>
                                                     <div class="alert alert-dismissible" role="alert" id="rds-file-label" style="display: none;">
                                                        <div class="row">
                                                            <div class="col-md-1 col-1 text-end"> 
                                                               <img src="images/components/_file-uploaders/default-icon.svg" width="20px">
                                                            </div>
                                                            <div class="col-md-8 col-8">
                                                               <div id="file-upload-filename"></div>
                                                            </div>
                                                            <div class="col-md-3 col-3  text-center pr-4"> 478 KB </div>
                                                        </div>
                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                      </div> 
                                                  </div>
                                                </form>
                                          </div>
                                       </div>
                                    </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularBasic" role="tabpanel" aria-labelledby="AngularBasic-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-file-uploader
  size="medium"
  label="Upload Files"
  [multipleFiles]="false"
  maxfilesize="5"
  sizeType=""
  role="fileUpload"
  (click)="click($event)"
  (onItemClick)="onItemClick($event)"
></rds-file-uploader>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>

<section class="py-4">
    <h6>Multiple File Uploader</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="PreviewMultiple-tab" data-bs-toggle="tab" data-bs-target="#PreviewMultiple" type="button" role="tab" aria-controls="PreviewMultiple" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="AngularMultiple-tab" data-bs-toggle="tab" data-bs-target="#AngularMultiple" type="button" role="tab" aria-controls="AngularMultiple" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="PreviewMultiple" role="tabpanel" aria-labelledby="PreviewMultiple-tab">
          <div class="contents bg-light p-5">
            <div class="row">
               <div class="contents bg-light p-5">
                                       <div class="row">
                                           <div class="col-xl-6 col-md-9">
                                                <form class="abc">
                                                   <div class="row">
                                                      <div class="col-6">
                                                         <label>
                                                            Upload Files
                                                         </label>
                                                      </div>                                                      
                                                      <div class="col-6 text-end">
                                                         <label class="text-muted">
                                                            Maximum 5MB
                                                         </label>
                                                      </div>
                                                   </div>
                                                  <input type="file" id="file-upload" multiple="" required="">
                                                  <label class="file-upload" for="file-upload">
                                                      Drag and drop files 
                                                      <div>(PNG, JPG, DOC, PDF, PPT)</div>
                                                  </label>
                                                  <div>
                                                     <div class="alert alert-dismissible" role="alert" id="rds-file-label" style="display: none;">
                                                        <div class="row">
                                                            <div class="col-md-1 col-1 text-end"> 
                                                               <img src="images/components/_file-uploaders/default-icon.svg" width="20px">
                                                            </div>
                                                            <div class="col-md-8 col-8">
                                                               <div id="file-upload-filename"></div>
                                                            </div>
                                                            <div class="col-md-3 col-3  text-center pr-4"> 478 KB </div>
                                                        </div>
                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                      </div> 
                                                  </div>
                                                </form>
                                          </div>
                                       </div>
                                    </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade show" id="AngularMultiple" role="tabpanel" aria-labelledby="AngularMultiple-tab">
          <div class="contents bg-light">
<div class="row bg-dark text-white m-0 p-4">

```html
<rds-file-uploader
  size="medium"
  label="Upload Files"
  [multipleFiles]="true"
  maxfilesize="5"
  sizeType=""
  role="fileUpload"
  extensions="png, jpg, doc, ,pdf, ppt"
  (click)="click($event)"
  (onItemClick)="onItemClick($event)"
></rds-file-uploader>
```

</div>
          </div>
        </div>
      </div>
    </div>
  </section>


<section class="py-4">
                        <h6>
                           Skeleton / Specifications
                        </h6>
                        <div class="py-3">
                              <!-- Tab panes -->
                              <div class="card border p-5">
                                 <div class="row">
                                    <div class="col-md-12">
                                       <img src="https://portal.raaghu.io/images/components/_file-uploaders/img-1.png" class="img-fluid">
                                    </div> 
                                 </div>
                              </div>
                        </div>
                     </section>