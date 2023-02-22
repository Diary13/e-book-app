import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private apollo: Apollo) {

  }
  getAllBooks() {
    return this.apollo.query({
      query: gql`
        query {
          books{
            id
            image
            title
          }
        }`
    })
  }
}
