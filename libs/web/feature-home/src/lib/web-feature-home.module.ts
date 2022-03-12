import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchViewerModule } from './search-viewer/search-viewer.module';
import { StatisticsViewerModule } from './statistics-viewer/statistics-viewer.module';
import { TopicsViewerModule } from './topics-viewer/topics-viewer.module';
import { ChallengeHostListModule } from './challenge-host-list/challenge-host-list.module';
import { ChallengeRegistrationModule } from './challenge-registration/challenge-registration.module';
import { FeaturedChallengeListModule } from './featured-challenge-list/featured-challenge-list.module';
import { SponsorListModule } from './sponsor-list/sponsor-list.module';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [
    SearchViewerModule,
    StatisticsViewerModule,
    TopicsViewerModule,
    ChallengeHostListModule,
    ChallengeRegistrationModule,
    FeaturedChallengeListModule,
    SponsorListModule,
  ],
})
export class WebFeatureHomeModule {}