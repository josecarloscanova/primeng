import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagesDemo} from './messagesdemo';
import {MessagesDemoRoutingModule} from './messagesdemo-routing.module';
import {MessagesModule} from '../../../components/messages/messages';
import {MessageModule} from '../../../components/message/message';
import {ButtonModule} from '../../../components/button/button';
import {TabViewModule} from '../../../components/tabview/tabview';
import {CodeHighlighterModule} from '../../../components/codehighlighter/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		MessagesDemoRoutingModule,
        MessagesModule,
        MessageModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		MessagesDemo
	]
})
export class MessagesDemoModule {}
