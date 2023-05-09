import { Component } from '@angular/core';
import {
  Image,
  ImageService,
} from '@sagebionetworks/openchallenges/api-client-angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ConfigService } from '@sagebionetworks/openchallenges/config';

@Component({
  selector: 'openchallenges-challenge-search',
  templateUrl: './challenge-search.component.html',
  styleUrls: ['./challenge-search.component.scss'],
})
export class ChallengeSearchComponent {
  public isPlatformServer = false;
  public searchOC$: Observable<Image> | undefined;
  searchTerms!: string | undefined;

  constructor(
    private readonly configService: ConfigService,
    private router: Router,
    private imageService: ImageService
  ) {
    this.isPlatformServer = this.configService.config.isPlatformServer;
  }

  ngOnInit() {
    this.searchOC$ = this.imageService.getImage({
      objectKey: 'home-search.svg',
    });
  }

  onSearch(): void {
    this.router.navigateByUrl('/challenge?searchTerms=' + this.searchTerms);
  }
}
