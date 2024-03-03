import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Author } from 'src/app/core/models/common.model';
import { BookService } from 'src/app/core/services/books-service/book.service';
import { SharedService } from 'src/app/core/services/shared-service/shared.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss'],
})
export class AuthorDetailsComponent implements OnInit {
  author: Author | undefined;
  authorName: string | null = '';
  authorKey: string | null = '';
  isLoading: boolean = true;
  constructor(
    private readonly spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private readonly bookService: BookService,
    private router: Router,
    private http: HttpClient,
    private sharedService: SharedService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.authorName = this.activatedRoute.snapshot.paramMap.get('name');
    this.authorKey = this.activatedRoute.snapshot.paramMap.get('key');
    this.getAuthor();
  }
  getAuthor() {
    const authorName = this.authorName;
    const authorKey = this.authorKey;

    if (
      !authorName ||
      !authorKey ||
      authorName.trim() === '' ||
      !this.authorKey
    ) {
      this.router.navigate(['**']);
      return;
    }
    this.bookService.getAuthorDetails(authorName).subscribe((response) => {
      const author = response.docs.find(
        (doc: Author) => doc.key === this.authorKey!.replace('/authors/', '')
      );

      if (author) {
        const imgURL = `https://covers.openlibrary.org/a/olid/${author.key}-L.jpg`;

        this.http.get(imgURL, { responseType: 'blob' }).subscribe(
          (imageBlob: Blob) => {
            if (imageBlob.size > 3000) {
              this.author = { ...author, cover_img: imgURL };
            } else {
              this.author = {
                ...author,
                cover_img: '/assets/img/author-default.jpg',
              };
            }
            this.isLoading = false;
          },
          (error) => {
            this.sharedService.handleApiError(
              error,
              'Error occurred while fetching author details.'
            );

            this.isLoading = false;
          }
        );
      } else {
        this.toastr.error('Author not found.', 'Error');
        this.router.navigate(['**']);
      }

      this.spinner.hide();
    });
  }

  onImageLoad() {
    this.isLoading = false;
  }
}
