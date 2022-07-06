---
slug: "/button-group"
date: "2019-05-04"
title: "button-group"
---

<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/style-elements.css">
<link rel="stylesheet" href="../../../../../../../raaghu/src/assets/css/main.css">

#### Table

<p class="checkbox-def">Tables are a designed for displaying large amounts of data in rows and columns.</p>

<section class="py-4">
    <h6>Basic Table</h6>
    <div class="py-3">
      <div class="cust-tabs">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="Preview-tab" data-bs-toggle="tab" data-bs-target="#Preview" type="button" role="tab" aria-controls="Preview" aria-selected="true">Preview </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="angular-tab" data-bs-toggle="tab" data-bs-target="#angular" type="button" role="tab" aria-controls="angular" aria-selected="false"><i class="bi bi-code-slash" style="font-size:1.0rem"></i>Angular</button>
          </li>
        </ul>
      </div>
      <div class="tab-content card border" id="myTabContent">
        <div class="tab-pane fade show active" id="Preview" role="tabpanel" aria-labelledby="Preview-tab">
          <div class="contents bg-light p-5">
                                          <div class="row">
                                             <div class="col-md-8">
                                                   <table class="table">
                                                     <thead>
                                                       <tr>
                                                         <th scope="col">#</th>
                                                         <th scope="col">First</th>
                                                         <th scope="col">Last</th>
                                                         <th scope="col">Handle</th>
                                                       </tr>
                                                     </thead>
                                                     <tbody>
                                                       <tr>
                                                         <th scope="row">1</th>
                                                         <td>Mark</td>
                                                         <td>Otto</td>
                                                         <td>@mdo</td>
                                                       </tr>
                                                       <tr>
                                                         <th scope="row">2</th>
                                                         <td>Jacob</td>
                                                         <td>Thornton</td>
                                                         <td>@fat</td>
                                                       </tr>
                                                       <tr>
                                                         <th scope="row">3</th>
                                                         <td colspan="2">Larry the Bird</td>
                                                         <td>@twitter</td>
                                                       </tr>
                                                     </tbody>
                                                   </table>
                                             </div> 
                                          </div>
                                    </div>
        </div>
        <div class="tab-pane fade show" id="Preview" role="tabpanel" aria-labelledby="Preview-tab">
          <div class="contents bg-code">
<div class="row  m-0 p-4">

```html
<rds-table [thead]="thead" [tbody]="tbody">
  <ng-template #thead>
    <th>Name</th>
    <th>Age</th>
    <th>State</th>
  </ng-template>
  <ng-template #tbody let-val>
    <tr>
      <td>{{val.name}}</td>
      <td>{{val.age}}</td>
      <td>{{val.state}}</td>
    </tr>
  </ng-template>
</rds-table>
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
                                    <div class="col-md-8">
                                       <img src="https://portal.raaghu.io/images/components/_table/img-1.png" class="img-fluid"> 
                                    </div> 
                                 </div>
                              </div>
                        </div>
                     </section>



<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>