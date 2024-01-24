# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from schematic_api.models.base_model_ import Model
from schematic_api.models.project_metadata import ProjectMetadata
from schematic_api import util

from schematic_api.models.project_metadata import ProjectMetadata  # noqa: E501

class ProjectMetadataPageAllOf(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, projects=None):  # noqa: E501
        """ProjectMetadataPageAllOf - a model defined in OpenAPI

        :param projects: The projects of this ProjectMetadataPageAllOf.  # noqa: E501
        :type projects: List[ProjectMetadata]
        """
        self.openapi_types = {
            'projects': List[ProjectMetadata]
        }

        self.attribute_map = {
            'projects': 'projects'
        }

        self._projects = projects

    @classmethod
    def from_dict(cls, dikt) -> 'ProjectMetadataPageAllOf':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The ProjectMetadataPage_allOf of this ProjectMetadataPageAllOf.  # noqa: E501
        :rtype: ProjectMetadataPageAllOf
        """
        return util.deserialize_model(dikt, cls)

    @property
    def projects(self):
        """Gets the projects of this ProjectMetadataPageAllOf.

        An array of project metadata.  # noqa: E501

        :return: The projects of this ProjectMetadataPageAllOf.
        :rtype: List[ProjectMetadata]
        """
        return self._projects

    @projects.setter
    def projects(self, projects):
        """Sets the projects of this ProjectMetadataPageAllOf.

        An array of project metadata.  # noqa: E501

        :param projects: The projects of this ProjectMetadataPageAllOf.
        :type projects: List[ProjectMetadata]
        """
        if projects is None:
            raise ValueError("Invalid value for `projects`, must not be `None`")  # noqa: E501

        self._projects = projects