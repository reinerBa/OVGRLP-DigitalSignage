import { containItemsWhereEachItem, Ensure, equals, isGreaterThan, not, property } from '@serenity-js/assertions'
import { Task } from '@serenity-js/core'
import { isPresent, Navigate, Wait, Text, isVisible, isClickable, Attribute } from '@serenity-js/protractor'
import { GetRequest, LastResponse, Send } from '@serenity-js/rest'
import { Roomcontrol } from './RoomcontrolApp'

export const IsAppRunning = (baseUrl: string) =>
  Task.where('#actor checks if the app is running',
    Navigate.to(baseUrl + 'roomcontrol/#'),
    //        Wait.for(Duration.ofMilliseconds(100)),
    Wait.until(Roomcontrol.FirstDisplayLi, isPresent()),
    Ensure.that(Roomcontrol.versionElement, isPresent()),
    Ensure.that(Roomcontrol.titleNavField, isPresent()),
    Ensure.that(Roomcontrol.titleNavField, isVisible()),
    Ensure.that(Roomcontrol.titleNavField, isClickable()),
    Ensure.that(Text.of(Roomcontrol.titleNavField), equals('Saalsteuerung')),
    Ensure.that(Roomcontrol.DisplayItems.first(), isPresent()),
    Ensure.that(Roomcontrol.DisplayItems.first(), isVisible()),
    Ensure.that(Attribute.of(Roomcontrol.DisplayItems.first()).called('href'), not(equals(''))),
    Ensure.that(Roomcontrol.DisplayItems.count(), isGreaterThan(1)),
    Ensure.that(Text.ofAll(Roomcontrol.DisplayItems), containItemsWhereEachItem(not(equals('')))),

    // with GetResponse
    Send.a(GetRequest.to(baseUrl + 'roomcontrol/assets/config.json')),
    Ensure.that(LastResponse.status(), equals(200)),
    Ensure.that(LastResponse.body<{webApiUrl: string, useWindowsAuthentication: string}>(), property('webApiUrl', not(equals('')))),
    Ensure.that(LastResponse.body<{webApiUrl: string, useWindowsAuthentication: string}>(), property('useWindowsAuthentication', not(equals('')))),
    //        Ensure.that(LastResponse.body<{assemblyVersion: string, isDbConnected: boolean}>(), property('isDbConnected', isTrue())),

    Send.a(GetRequest.to(baseUrl + 'webapi/settings/displays')),
    Ensure.that(LastResponse.status(), equals(401))
    // Ensure.that(LastResponse.body<string>(), includes('[{id')),
  )
